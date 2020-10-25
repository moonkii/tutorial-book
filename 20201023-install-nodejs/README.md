# Node.js 설치

## 직접 설치

[Node.js 다운로드](https://nodejs.org/ko/) 에서 LTS 버전 다운받아서 설치(macOS: `~.pkg`, Windows: `~.msi`)

설치 완료 후 macOS Terminal 이나 Windows Power shell에서 결과 확인이 가능하다.

```shell script
node -v
> 12.19.0
```

## NVM(Node Version Manager)으로 설치

### NVM 설치

설치 스크립트를 통해 설치하거나 업데이트가 가능하다.

```shell script
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash
```

설치가 완료되면 `~/.bash_profile`에 다음 코드들이 추가된다.
만약에 없다면 `vi ~/.bash_profile` 로 코드들을 추가하고 `source ~/.bash_profile`로 재시작한다.

```shell script
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

### NVM으로 Node.js 설치

```shell script
nvm ls # nvm 확인

nvm install -lts # node lts 버전 설치

nvm use --lts # lts 버전을 모든 shell에서 사용하도록 설정

nvm alias default $(nvm current) # 새 shell에서 사용할 기본 노드 버전을 설치
```
