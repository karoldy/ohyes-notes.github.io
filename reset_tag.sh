# !/bin/zsh

echo "please input your tag name: "

read TAG_NAME

git tag -d  ${TAG_NAME}

git tag ${TAG_NAME}

git push origin --delete tag ${TAG_NAME}

git push origin ${TAG_NAME}