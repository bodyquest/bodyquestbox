namespace API.Dtos
{
    using System.ComponentModel;
    using System.ComponentModel.DataAnnotations;
    
    public class RegisterDto
    {
        [Required]
        [MaxLength(8)]
        [DisplayName("Display Name")]
        public string DisplayName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [RegularExpression("(?=^.{6,15}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\\s).*$", ErrorMessage = "Password must have at least 1 Uppercase, 1 Lowercase, 1 number and 1 non alphanumeric and be 6-15 characters long!")]
        public string Password { get; set; }
    }
}