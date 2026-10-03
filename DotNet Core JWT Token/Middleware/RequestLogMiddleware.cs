namespace Project.Middleware
{
    public class RequestLogMiddleware
    {
        private readonly RequestDelegate _next;

        public RequestLogMiddleware(RequestDelegate _next)
        {
            this._next = _next;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            Console.WriteLine("Request URL : " + context.Request.Path);
            await _next(context);
        }
    }
}
