'use strict';

/**
 * View.js controller
 *
 * @description: A set of functions called "actions" for managing `View`.
 */

module.exports = {

  /**
   * Retrieve view records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.view.search(ctx.query);
    } else {
      return strapi.services.view.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a view record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.view.fetch(ctx.params);
  },

  /**
   * Count view records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.view.count(ctx.query);
  },

  /**
   * Create a/an view record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.view.add(ctx.request.body);
  },

  /**
   * Update a/an view record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.view.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an view record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.view.remove(ctx.params);
  }
};
