/**
 * Created by agung on 13/10/15.
 * configuration for all javascript
 */
'use strict';
app.factory('Config', [ function(){
    /*
     * global object
     * */
    var self = this;
    /*
     * set env
     * e.g.
     *    self.env = 'development'; (for development)
     *    self.env = 'production'; (for production)
     * */
    self.env = 'production';
    /*api global url*/
    self.apiglobalurl = 'http://apipim.ralali.com/';
    /*web url*/
    self.websiteurl = 'http://localhost:8000';

    switch(self.env){
        /*
         * all config for development
         * */
        case'development':
            /*
             *get how much deep your application
             * it will return number
             * e.g.
             *     http://localhost/website/public/ : it's should be 2
             *     http://localhost/website/ : it's should be 1
             * */
            self.howdeep = 2;
            break;
        case'production':
            /*
             * all config for production
             * */
            self.howdeep = 0;
            break;
    }

    return{
        /*return object howdeep*/
        getHowdeep : function(){
            return self.howdeep;
        },
        /*get env*/
        getEnv : function(){
            return self.env;
        },
        getUrl : function(urls){
            return self.env === 'development' ? 'public/'+ urls : '/'+urls
        },
        getApiUrl : function(){
            return self.apiglobalurl
        },
        getWebUrl : function(){
            return self.websiteurl
        }
    }
}]);