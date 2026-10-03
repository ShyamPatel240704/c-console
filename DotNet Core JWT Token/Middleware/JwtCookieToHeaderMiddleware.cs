namespace Project.Middleware
{
    public class JwtCookieToHeaderMiddleware
    {
        private readonly RequestDelegate _next;

        public JwtCookieToHeaderMiddleware(RequestDelegate _next)
        {
            this._next = _next;
        }
        public async Task InvokeAsync(HttpContext context)
        {
            var token = context.Request.Cookies["jwtToken"];

            if (!string.IsNullOrEmpty(token) && !context.Request.Headers.ContainsKey("Authorization"))
            {
                context.Request.Headers.Add("Authorization", $"Bearer {token}");
            }



            Console.WriteLine("Request URL : " + context.Request.Path);
            await _next(context);
        }
    }
}
