namespace Core.Interfaces
{
    using System;
    using System.Threading.Tasks;
    using Core.Entities;
    public interface IUnitOfWork : IDisposable
    {
         IGenericRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity;

         IProductRepository productRepository();

         Task<int> Complete();
    }
}