import fs from 'fs/promises'
import path from 'path'
import { exec } from '@actions/exec'
import packageJson from 'package-json'

export default async function publish({ cwd }: { cwd: string }) {
  const { version, name } = JSON.parse(await fs.readFile(
    path.resolve(cwd, 'packages/all/package.json'),
    'utf-8',
  ))

  const tag = `v${version}`
  let latest
  try {
    const { version } = await packageJson(name)
    latest = version
  }
  catch (e) {
    console.warn(e)
    // 可能第一次还没提交package，会抛异常
  }

  await exec('pnpm', 'publish -r --no-git-checks'.split(' '))
  if (latest !== version)
    await exec('git', `tag -a ${tag} -m ${tag}`.split(' '))
}

publish({
  cwd: process.cwd(),
})
