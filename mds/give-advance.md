# give(応用)

## giveの応用とは
giveには色々な設定を付け加えることができます。例えば

- qキーでプレイヤーにアイテムを捨てられないようにしたい！
- ピッケルを与えたいけど、このブロックしか壊せないようにしたい！

などの設定ができます。

## 記法(アイテムを捨てられないようにする)
まずアイテムを捨てられないようにするには

```
/give @p アイテム名 個数 アイテムの詳細 {"item_lock":{"mode":"lock_in_slot"}}
```

と記述します。

例えば

```
/give @p minecraft:concrete 64 3 {"item_lock":{"mode":"lock_in_slot"}}
```

と記述すれば捨てることができない空色のコンクリートブロックを付与できます。

## 記法(壊せるブロックの指定)
壊せるブロックの設定には

```
/give @p アイテム名 個数 アイテムの詳細 {"minecraft:can_destroy":{"blocks":["壊せるブロック"]}}
```

と記述します。注意点として**このコマンドはアドベンチャーモードでしか動作しません**。

例えば

```
/give @p minecraft:netherite_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["cobblestone"]}}
```

と記述すれば丸石のみを壊せるネザライトのピッケルを付与できます。また壊せるブロックを複数指定することもでき、

```
/give @p minecraft:netherite_pickaxe 1 0 {"minecraft:can_destroy":{"blocks":["cobblestone","gold_block"]}}
```

と記述すれば丸石と金ブロックのみを壊せるネザライトのピッケルを付与できます。(「,」を間にいれることにより複数指定できます。)