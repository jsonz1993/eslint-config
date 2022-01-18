- 修改代码
- git add . && npm run commit 提交更改

- 要更改版本，则运行 `pnpm changeset`，会生成 change log 数据
> 后续下面步骤可以加到github action
- 运行 `pnpm changeset version` 升级版本，并更新变更日志文件
- 运行 `pnpm install` 更新 pnpm-lock 并重新构建包
- git add . && npm run commit 提交更改 && 打version tags `vx.xx.x`
- pnpm publish -r
