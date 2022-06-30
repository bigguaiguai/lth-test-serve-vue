const router = require('koa-router')()

const Requirements = require('../../dbs/models/requirements')

const {filterObjFalse} = require('../../config/constants')
router.prefix('/requirement')

router.post('/add', async function(ctx) {
  let code = 200;
  let msg = '新增成功';
  let success = true;
  const requirement = new Requirements(ctx.request.body)
  try{
    await requirement.save()
  }catch (e) {
    code = 400;
    success = false
    msg = '新增失败:' + e;
  }
  ctx.body = {
    code, msg,success,
  }
})

module.exports = router