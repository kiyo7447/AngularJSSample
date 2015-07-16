using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AngularJSAndTypeScriptServer.Models
{
	//http://www.asp.net/mvc/overview/getting-started/getting-started-with-ef-using-mvc/handling-concurrency-with-the-entity-framework-in-an-asp-net-mvc-application
	public class Product
	{
		//この方法はMVCではダメで
		//http://cerberus1974.hateblo.jp/entry/2013/12/13/000429
		//↓
		//この方法にしてみた
		//http://cerberus1974.hateblo.jp/entry/2013/09/29/220550

		[JsonProperty("id")]
		public int Id { get; set; }
		public string Title { get; set; }
		public string Description { get;set; }
		[Column(TypeName="money")]
		public decimal Price {get;set;}
	}
}