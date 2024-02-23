# セリフの動きファイル

## セリフの動きファイルとは

どういう意味か文字だけではわかりにくいでしょう。実はダイアログには「表示させる内容」だけではなく、

- ボタンのテキストを変更
- ダイアログを開いた時に動かすコマンド
- ダイアログを閉じた時に動かすコマンド
- ダイアログ内のボタンをクリックした時に動かすコマンド
- ボタンをクリックした時に特定の URL を開く

といったことを記述することができます。

scene.json といったファイルにこれらは記述し、場所は**behavior_packs/ビヘイビアーパック名/dialogue/scene.json**です。

## 記述方法

例

```
{
    "format_version": "1.17.0",
    "minecraft:npc_dialogue": {
        "scenes": [
          {
                "scene_tag": "scene_tutorial01_init",
                "npc_name": "テックくん",
                "text": {
                    "rawtext": [
                        {
                            "translate": "scene.tutorial01.init",
                            "with": ["\n\n"]
                        }
                    ]
                },
                "on_open_commands": [],
                "on_close_commands": ["/setblock 1742 129 -1709 minecraft:redstone_block", "/setblock 1737 136 -1703 minecraft:diamond_block"],
                "buttons": [
                    {
                        "name":{
                            "rawtext": [
                                {
                                    "translate": "button.start"
                                }
                            ]
                        },
                        "commands": ["/setblock 1743 135 -1710 minecraft:air"]
                    }
                ]
            },
            {
                "scene_tag": "scene_tutorial01",
                "npc_name": "テックくん",
                "text": {
                    "rawtext": [
                        {
                            "translate": "scene.tutorial01.init2",
                            "with": ["\n\n"]
                        }
                    ]
                },
                "on_open_commands": ["/tp @p 1742 130 -1720"],
                "on_close_commands": ["/setblock 1742 129 -1709 minecraft:redstone_block", "/setblock 1737 136 -1703 minecraft:diamond_block"],
                "buttons": [
                    {
                        "name":{
                            "rawtext": [
                                {
                                    "translate": "button.start"
                                }
                            ]
                        },
                        "commands": ["/setblock 1743 135 -1710 minecraft:air"]
                    }
                ]
            },
        ]
    }
}
```

いきなり、大量の文字列が出てきて驚いているかもしれませんが、注目すべきのはここです。

```
{
    "scene_tag": "scene_tutorial01_init",
    "npc_name": "テックくん",
    "text": {
        "rawtext": [
            {
                "translate": "scene.tutorial01.init",
                "with": ["\n\n"]
            }
        ]
    },
    "on_open_commands": ["/tp @p 1742 130 -1720"],
    "on_close_commands": ["/setblock 1742 129 -1709 minecraft:redstone_block", "/setblock 1737 136 -1703 minecraft:diamond_block"],
    "buttons": [
        {
            "name":{
                "rawtext": [
                    {
                        "translate": "button.start"
                    }
                ]
            },
            "commands": ["/setblock 1743 135 -1710 minecraft:air"]
        }
    ]
}
```

上の"scenes": []の中に入っているリストの 1 つですね。これが**一つのセリフに関する情報になります**。

## セリフの指定

まず、[ja_JP.lang](/file/jajp)でセリフの名前を決めたと思います。これを **"text"の中の"rawtext"の中の"translate"** に記述します。
**ダブルクオーテーションをつけるのを忘れないでください**。

## ボタンのテキストを変更

**"buttons"の中の"name"の中の"rawtext"の中の"translate"** に記述します。
ここには ja_JP.lang で決めたボタンの名前を記述します。

## ダイヤログを開いた時、閉じた時にコマンドを実行

**"on_open_commands"** に記述します。複数コマンドを記述することも可能で、その場合は

```
"on_open_commands":  ["コマンドその 1","コマンドその 2","コマンドその 3"]
```

と記述します。

閉じた時の場合も **"on_close_commands"** に同様に記述します。

## ボタンをクリックした時にコマンドを実行

**"buttons"の中の"commands"** に記述します。
これも上記同様の方法で ”on_open_commands” のようにコマンドを記述できます。

## ボタンをクリックすると特定の URL に飛ぶ

あまり使わないかもしれませんが、このようなことをしたい場合、"buttons" 以下をこのように記述してください。

```
"buttons": [
        {
            "name":{
                "rawtext": [
                    {
                        "translate": "button.start"
                    }
                ]
            },
            "url": "URLのパス"
        }
    ]
```
