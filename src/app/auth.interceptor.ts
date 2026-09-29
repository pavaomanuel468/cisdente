import { HttpInterceptor, HttpInterceptorFn} from "@angular/common/http";

export const authInterceptor: HttpInterceptorFn = (req, next)=>{

    const token = localStorage.getItem('token');

    if(!token){
        return next(req)
    }

    const requestComToken = req.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`
        }
    });

    return next(requestComToken);

}