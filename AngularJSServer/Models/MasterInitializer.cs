using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AngularJSAndTypeScriptServer.Models
{
	public class MasterInitializer  :DropCreateDatabaseAlways<MasterContext>
	{
		protected override void Seed(MasterContext context)
		{
			var products = new List<Product> {
				new Product{Id=0,Title="ペイントポット",Description="柄物鍋",Price=3.95m},
				new Product{Id=1,Title="ポルカドット",Description="水玉模様",Price=12.95m},
				new Product{Id=2,Title="ペブル",Description="小石",Price=6.95m},
			};

			products.ForEach(m => context.Products.Add(m));

			context.SaveChanges();
			//base.Seed(context);
		}
	}
}