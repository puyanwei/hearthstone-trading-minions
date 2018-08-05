# Welcome to the Inn! - Hearthstone Minion Trading

_This is my first kata I have created on [codewars](https://www.codewars.com). Check it out here._

[Hearthstone](https://playhearthstone.com) is one of my favourite games! It is a card game based on the characters of World of Warcraft.

![](https://user-images.githubusercontent.com/14803518/43685084-42aedbc0-98a4-11e8-9fe5-e883dd7aef87.png)

In Hearthstone, each player has cards that they put on the board. Each card is a minion that has stats of attack and health, and the turn after it has been played they are able to trade with the opponent's minions.

```
opponent's board = [[2, 2], [3, 3]]
your board = [[3, 6], [3, 2]]
```

Here is an example board. The opponent has 2 minions, one with 2 attack and 2 health, and the other has 3 attack and 3 health. Your board has 2 minions, one with 3 attack and 6 health, and the other has 3 attack and 2 health.

Its your turn. You can use your [3, 6] and [3, 2] minions to trade with your opponent's [2, 2] and [3, 3].

When minions trade, the attack deducts the health of both opponent and own minions. When health is gone, the minion is destoyed and removed from the board.

The [3, 6] trading with the [2, 2] means that the [2, 2] is destroyed because it only has 2 health, and the [3, 6] becomes a [3, 4] because the 2 attack of the [2, 2] is deducted from its health.

The [3, 2] trading with the [3, 3] means that both minions are destroyed because both have 3 attack which is more than their health. The attack values never change.

After the trades, the board becomes like this;

```
opponent's board = []
your board = [[3, 4]]
```

Write a function that will output the board state after trades has happened.

-   The output should be an object that has two arrays of the resulting board state (see example).
-   The second board state always trades into the first.
-   Minions always trade with the enemy minions directly in front of them.

### Another Example;

```
tradeMinions([[2, 2], [3, 3], [1, 6]], [[3, 6], [3, 9], [1, 1]]);
```

output

```
{
  opponent: [[1, 5]],
  hero: [[3, 4], [3, 6]]
}
```

### Setup and Testing

```
git clone git@github.com:puyanwei/hearthstone-trading-minions.git
cd hearthstone-trading-minions
open SpecRunner.html
```

The test suite on codewars seems to be custom made framework inspired by Mocha and RSpec, which I cannot import. So I decided to use Jasmine since it works right off the bat!

Get those tests passing, edit the code, save it and open `SpecRunner.html` to see the tests. I'll probably add more tests later on, so keep an eye on this repo!

Try and keep to the usual great coding practices! Feel free to write more functions and I suggest using ES6 functional programming.

Shortest code isn't necessarily sweet, but readability is king!
