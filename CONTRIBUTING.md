
## 修改代码
1. 修改代码
2. git commit 'feat:xxxx' || pnpm run cz

## 发行版本
1. 运行 `pnpm u` || `pnpm changeset` 记录版本信息
2. git push
3. changeset-action 会发起一个 pull required 到 master
4. 同意上一步的pr后，会触发 github action，会根据 changeset 升级版本，触发一个pull required
5. 同意上一步的pr后，会触发 github action，构建对应的包发布到npm

### github action 自动化以下行为
- 运行 `pnpm changeset version` 升级版本，并更新变更日志文件
- 运行 `pnpm install` 更新 pnpm-lock 并重新构建包
- git add . && npm run commit 提交更改
- pnpm publish -r
