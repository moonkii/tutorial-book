# Node.js 설치

## [FNM(Fast Node Manager)](https://github.com/Schniz/fnm) 으로 설치(추천👍)

### FNM 설치

MacOS/Linux 의 경우 스크립트를 이용해 `bash`, `zsh`, `fish` 로 설치가 가능하다.

```bash
curl -fsSL https://fnm.vercel.app/install | zsh
```

MacOS 는 Homebrew 로도 설치가 가능하다.

```bash
# Homebrew 로 설치
brew install fnm
```

### FNM 으로 Node.js 설치

shell 은 `bash`, `zsh`, `fish`, `powershell` 모두 가능하다.

```bash
fnm completions --shell zsh

# ~/.zshrc 에 추가
eval "$(fnm env)"

# Node lts 버전 설치
fnm install --lts

# Node lts 특정 버전 설치(2021. 01. 18 기준 lts) 
fnm install 14.15.4

# 다운로드 가능한 Node 버전 확인
fnm list-remote 

# Node 설치 리스트 확인
fnm list

# 사용할 Node 버전 선택
fnm use 14.15.4

# 사용하고 있는 Node 버전을 default 로 alias 설
fnm default $(fnm current)
```

## NVM(Node Version Manager)으로 설치

### NVM 설치

설치 스크립트를 통해 설치하거나 업데이트가 가능하다.

```shell script
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash
```

설치가 완료되면 `~/.bash_profile`에 다음 코드들이 추가된다.
만약에 없다면 `vi ~/.bash_profile` 로 코드들을 추가하고 `source ~/.bash_profile`로 재시작한다.

> zsh 을 사용하고 있으면 ~/.zshrc 에 코드를 추가한다.

```shell script
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

### NVM 으로 Node.js 설치

```shell script
# nvm 확인
nvm ls

# Node lts 버전 설치
nvm install -lts

# Node 특정 버전 설치(2021. 01. 18 기준 lts)
nvm install 14.15.4 

# lts 버전을 모든 shell 에서 사용하도록 설정
nvm use --lts 

# 새 shell 에서 사용할 기본 노드 버전을 설치
nvm alias default $(nvm current) 
```

## 직접 설치

[Node.js 다운로드](https://Nodejs.org/ko/) 에서 LTS 버전 다운받아서 설치(macOS: `~.pkg`, Windows: `~.msi`)

설치 완료 후 macOS Terminal 이나 Windows Power shell 에서 결과 확인이 가능하다.

```shell script
Node -v
> 12.19.0
```
