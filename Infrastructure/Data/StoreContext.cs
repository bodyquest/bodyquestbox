namespace Infrastructure.Data
{
    using System;
    using System.Linq;
    using System.Reflection;
    using Core.Entities;
    using Core.Entities.OrderAggregate;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

    public class StoreContext : DbContext
    {
        //private readonly bool turnOfIdentity = false;
        public StoreContext(DbContextOptions<StoreContext> options) 
         : base(options) {
             //this.turnOfIdentity = turnOfIdentity;
         }

        public DbSet<Product> Products { get; set; }
        public DbSet<ProductCategory> ProductCategories { get; set; }
        public DbSet<Product_ProductCategory> Products_ProductCategories { get; set; }
        public DbSet<Option> Options { get; set; }
        public DbSet<OptionValue> OptionValues { get; set; }
        public DbSet<ProductVariant> ProductVariants { get; set; }
        public DbSet<ProductVariantOption> ProductVariantOptions { get; set; }
        public DbSet<SKU> SKUs { get; set; }

        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderItem> OrderItems { get; set; }

        public DbSet<DeliveryMethod> DeliveryMethods { get; set; }



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

            if (Database.ProviderName == "Microsoft.EntityFrameworkCore.Sqlite")
            {
                foreach (var entityType in modelBuilder.Model.GetEntityTypes())
                {
                    var properties = entityType.ClrType.GetProperties().Where(p => p.PropertyType == typeof(decimal));
                    var dateTimeProperties = entityType.ClrType.GetProperties()
                        .Where(p => p.PropertyType == typeof(DateTimeOffset));

                    foreach (var property in properties)
                    {
                        modelBuilder.Entity(entityType.Name).Property(property.Name).HasConversion<double>();
                    }

                    foreach (var property in dateTimeProperties)
                    {
                        modelBuilder.Entity(entityType.Name).Property(property.Name)
                            .HasConversion(new DateTimeOffsetToBinaryConverter());
                    }
                }
            }
       }
    }
}