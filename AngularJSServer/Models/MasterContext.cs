using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AngularJSAndTypeScriptServer.Models
{
	public class MasterContext : DbContext
	{
		public DbSet<Product> Products { get; set; }
	}
}