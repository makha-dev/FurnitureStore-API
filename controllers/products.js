const Product = require('../models/product');

const getAllProducts = async (req, res) => {
    const {name, featured, price, sort, fields, numericFilters, company} = req.query;
    const queryObject = {};
    // check name, company, featured, numericFilters
    

    if(name){
        queryObject.name = {
            $regex: name,
            $options: 'i',
        };
    }
    if(company){
        queryObject.company = company;
    }
    if(featured){
        queryObject.featured = featured === 'true' ? true : false;
    }
    
    if(numericFilters){
        const operatorMap = {
            '>': '$gt',
            '<': '$lt',
            '<=': '$lte',
            '>=': '$gte',
            '=': '$eq',
        }
        const regEx = /\b(<|>|<=|>=|=)\b/g
        let filters = numericFilters.replace(regEx, (match) => {
            return `-${operatorMap[match]}-`
        });
        const options = ['price', 'rating']
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-');
            if(options.includes(field)){
                queryObject[field] = {
                    [operator]: Number(value)
                }
            }
        })
        // console.log(queryObject);
    }
    // execute Product.find passing queryObject in it 

    let result = Product.find(queryObject);

    // check sort, fields 

    if(sort){
        const sortParameters = sort.split(',').join(' ');
        result.sort(sortParameters);
    }
    else{
        result.sort('name price')
    }

    if(fields){
        const fieldsParameters = sort.split(',').join(' ');
        result.select(fieldsParameters);
    }
    // limit
    // skip

    const limit = req.query.limit || 10;
    const page = req.query.page || 1;
    const skip = (page - 1) * limit;

    result.skip(skip).limit(limit);

    let products = await result;
    res.status(200).json({nbHits: products.length, products})
    
    // await the promise 

}

module.exports = {getAllProducts};