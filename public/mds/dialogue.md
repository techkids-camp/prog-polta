# dialogue

## dialogue とは

指定した npc にセリフを喋らせるコマンドです。使い道としては

- ステージが始まった時にチュートリアルとして喋らせる
- ステージの攻略についてアドバイスを送る

などが挙げられます。

## 記法

```
/dialogue open @e[type=npc,c=1] @a シーン名
```

シーン名に関しては**scene.json に記述した scene_tag**の中に記述されている文字列が入ります(クオートはいらない)

scene.json の記述方法に関しては[こちら](/file/scene)を参照してください。