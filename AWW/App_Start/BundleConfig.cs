using System.Web;
using System.Web.Optimization;

namespace AWW
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            //front css
            bundles.Add(new StyleBundle("~/Content/frontcss").Include(
                      "~/Content/css/bootstrap.min.css",
                      "~/Content/css/style.css"));

            bundles.Add(new StyleBundle("~/Content/frontcss-rtl").Include(
                      "~/Content/css/cssrtl/bootstrap-rtl.css",
                      "~/Content/css/cssrtl/style-rtl.css"));
        }
    }
}
