'use strict';

/**
 * Volumeissue.js controller
 *
 * @description: A set of functions called "actions" for managing `Volumeissue`.
 */

module.exports = {

  /**
   * Retrieve volumeissue records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.volumeissue.search(ctx.query);
    } else {
      return strapi.services.volumeissue.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a volumeissue record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.volumeissue.fetch(ctx.params);
  },

  /**
   * Count volumeissue records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.volumeissue.count(ctx.query);
  },

  /**
   * Create a/an volumeissue record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.volumeissue.add(ctx.request.body);
  },

  /**
   * Update a/an volumeissue record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.volumeissue.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an volumeissue record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.volumeissue.remove(ctx.params);
  }
};
