namespace Infrastructure.Data
{
    using System.Reflection;
    using Core.Entities;
    using Microsoft.EntityFrameworkCore;
    
    public class StoreContext : DbContext
    {
         public StoreContext(DbContextOptions<StoreContext> options) 
         : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<ProductCategory> ProductCategories { get; set; }
        public DbSet<Product_ProductCategory> Products_ProductCategories { get; set; }
        public DbSet<Option> Options { get; set; }
        public DbSet<OptionValue> OptionValues { get; set; }
        public DbSet<ProductVariant> ProductVariants { get; set; }
        public DbSet<ProductVariantOption> ProductVariantOptions { get; set; }
        public DbSet<SKU> SKUs { get; set; }


       protected override void OnModelCreating(ModelBuilder modelBuilder)
       {
           base.OnModelCreating(modelBuilder);
           modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());

           modelBuilder
            .Entity<Product_ProductCategory>()
            .HasKey(i => new { i.ProductId, i.ProductCategoryId });

            modelBuilder
                .Entity<Product_ProductCategory>()
                .HasOne(pc => pc.Product)
                .WithMany(p => p.Product_ProductCategories)
                .HasForeignKey(pc => pc.ProductId);

            modelBuilder
                .Entity<Product_ProductCategory>()
                .HasOne(p_c => p_c.ProductCategory)
                .WithMany(pc => pc.Product_ProductCategories)
                .HasForeignKey(p_c => p_c.ProductCategoryId);
       }
    }
}