const request = require('request');

module.exports = {

    httpGet(url)
    {
        return new Promise((resolve, reject) => {

            request.get(url, (error, response) => {

                if(error)
                {
                    reject(error);
                }
                
                resolve(response);
            });
        });
    },

    httpPost(url, form)
    {
        return new Promise((resolve, reject) => {

            request.post(url, { form }, (error, response) => {

                if(error)
                {
                    reject(error);
                }

                resolve(response);
            });
        });
    },

    httpPut(url, form)
    {
        return new Promise((resolve, reject) => {

            request.put(url, { form }, (error, response) => {

                if(error)
                {
                    reject(error);
                }

                resolve(response);
            });
        });
    },

    httpDelete(url)
    {
        return new Promise((resolve, reject) => {

            request.delete(url, (error, response) => {

                if(error)
                {
                    reject(error);
                }

                resolve(response);
            });
        });
    }
}