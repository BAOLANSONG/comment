'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list',controller.home.list);
  router.post('/login',controller.home.login);
  router.post('/bool',controller.home.bool);
  router.post('/yesBool',controller.home.yesBool);
  router.get('/addlist',controller.home.addlist);
  router.get('/deleteList',controller.home.deleteList);
};
