namespace Infrastructure.Data.Config
{
    using Core.Entities;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata.Builders;

    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.Property(p => p.Id).IsRequired();
            builder.Property(p => p.Name).IsRequired();
            builder.Property(p => p.ShortDescription).IsRequired();
            builder.Property(p => p.LongDescription).IsRequired();
            builder.Property(p => p.GrossWeight).IsRequired();
            builder.Property(p => p.PictureUrl).IsRequired();

            builder.Property(p => p.Price)
                .IsRequired()
                .HasColumnType("decimal(8,2)");
        }
    }
}