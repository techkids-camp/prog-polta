# particle

## particle とは

指定した座標にパーティクルをだすコマンドです。使い道としては

- プレイヤーに次にどこに進んでいいかの光の道を作りたい！
- パーティクルをかけて演出を出したい！

などがあげられます。

## 記法

```
/particle パーティクル名前 x y z
```

例

```
/particle minecraft:villager_happy 10 20 30
```

以下の画像のようなパーティクルが生成されます。

```
/particle minecraft:villager_happy 10 20 30
/particle minecraft:villager_happy 11 20 30
/particle minecraft:villager_happy 12 20 30
/particle minecraft:villager_happy 13 20 30
```

こんな感じで座標を少しずつ変えていくとこのような道ができます。
