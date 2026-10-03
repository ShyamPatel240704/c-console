using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Project.Helper
{
    public interface IJwtTokenHelper
    {
        string JWTTokenGanarator(int Roll, int RegId);
    }
    public class JwtTokenHelper : IJwtTokenHelper
    {
        private readonly IConfiguration _configuration;
        public JwtTokenHelper(IConfiguration _configuration)
        {
            this._configuration = _configuration;
        }

        public string JWTTokenGanarator(int roll, int regId)
        {
            var claims = new[]
            {
       new Claim(ClaimTypes.NameIdentifier, regId.ToString()),
new Claim(ClaimTypes.Role, roll.ToString())
    };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtSettings:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _configuration["JwtSettings:Issuer"],
                audience: _configuration["JwtSettings:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        //public string JWTTokenGanarator(int Roll, int RegId)
        //{
        //    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtSettings:Key"]));
        //    var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        //    var claims = new[]
        //    {
        //            new Claim(ClaimTypes.Role, Roll.ToString()),   // Role mate predefined che
        //            new Claim("RegId", RegId.ToString()),  // Custom claim
        //   };

        //    var token = new JwtSecurityToken(
        //        issuer: _configuration["JwtSettings:Issuer"],
        //        audience: _configuration["JwtSettings:Audience"],
        //        claims: claims,
        //        expires: System.DateTime.Now.AddMinutes(Convert.ToDouble(_configuration["JwtSettings:ExpireMinutes"])),
        //        signingCredentials: credentials
        //        );
        //    return new JwtSecurityTokenHandler().WriteToken(token);
        //}
    }
}
