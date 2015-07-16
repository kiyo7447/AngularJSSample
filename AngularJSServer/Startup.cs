using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularJSAndTypeScriptServer.Startup))]
namespace AngularJSAndTypeScriptServer
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
