let baseApi = '';
let url = '';
if (process.env.NODE_ENV == 'development') {
    baseApi = "http://54qj.test/";
    url = "http://54qj.test/";
} else if (process.env.NODE_ENV == 'testing') {
    baseApi = "http://54qjapi.54qn.cn/";
    url = "http://54qjapi.54qn.cn/";
} else if (process.env.NODE_ENV == 'production') {
    baseApi = "https://api.54qj.com/";
    url = "https://cdn.54qj.com/";
}
export {
    baseApi,
    url,
}