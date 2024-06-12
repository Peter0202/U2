using Microsoft.AspNetCore.Mvc;

namespace UploadHistory.Controllers
{
    [ApiController]
    [Route("/api/[controller]/[action]")]
    public class UploadHistoryController : ControllerBase
    {
        [HttpPost]
        public IActionResult RegisterUpload()
        {
            return NoContent();
        }
    }
}
