describe('Initial Tests', () => {
    it('trading equally no minions on board', () => {
        let result = tradeMinions([[2, 2], [3, 3]], [[2, 2], [3, 3]]);
        expect(result).toEqual({ opponent: [], hero: [] });
    });
    it('good trades for us', () => {
        let result = tradeMinions([[3, 3], [2, 1]], [[3, 6], [3, 2]]);
        expect(result).toEqual({ opponent: [], hero: [[3, 3]] });
    });
    it('bad trades for us', () => {
        let result = tradeMinions(
            [[6, 6], [4, 3], [6, 5]],
            [[2, 2], [2, 2], [1, 1]]
        );
        expect(result).toEqual({
            opponent: [[6, 4], [4, 1], [6, 4]],
            hero: [],
        });
    });
    it('both sides have minions after trades', () => {
        let result = tradeMinions(
            [[2, 2], [3, 3], [1, 6]],
            [[3, 6], [3, 9], [1, 1]]
        );
        expect(result).toEqual({ opponent: [[1, 5]], hero: [[3, 4], [3, 6]] });
    });
    it('no entries', () => {
        let result = tradeMinions([], []);
        expect(result).toEqual({ opponent: [], hero: [] });
    });
});

describe('trading variations one vs one', () => {
    it('hero trading 1,1 into 1,1 should equal an empty board', () => {
        let result = tradeMinions([[1, 1]], [[1, 1]]);
        expect(result).toEqual({ opponent: [], hero: [] });
    });
    it('hero trading 2,1 into 1,1 should equal an empty board', () => {
        let result = tradeMinions([[1, 1]], [[2, 1]]);
        expect(result).toEqual({ opponent: [], hero: [] });
    });
    it('hero trading 3,1 into 1,1 should equal an empty board', () => {
        let result = tradeMinions([[1, 1]], [[3, 1]]);
        expect(result).toEqual({ opponent: [], hero: [] });
    });
    it('hero trading 1,1 into 2,1 should equal an empty board', () => {
        let result = tradeMinions([[2, 1]], [[1, 1]]);
        expect(result).toEqual({ opponent: [], hero: [] });
    });
    it('hero trading 1,1 into 3,1 should equal an empty board', () => {
        let result = tradeMinions([[3, 1]], [[1, 1]]);
        expect(result).toEqual({ opponent: [], hero: [] });
    });
    it('hero trading 2,2 into 1,1 should equal 1,1 for the hero', () => {
        let result = tradeMinions([[1, 1]], [[2, 2]]);
        expect(result).toEqual({ opponent: [], hero: [[2, 1]] });
    });
    it('hero trading 1,1 into 2,2 should equal 1,1 for the opponent', () => {
        let result = tradeMinions([[2, 2]], [[1, 1]]);
        expect(result).toEqual({ opponent: [[2, 1]], hero: [] });
    });
    it('hero trading 3,1 into 2,2 should equal an empty board', () => {
        let result = tradeMinions([[2, 2]], [[3, 1]]);
        expect(result).toEqual({ opponent: [], hero: [] });
    });
    it('hero trading 3,4 into 2,2 should equal 3,2 for the hero', () => {
        let result = tradeMinions([[2, 2]], [[3, 4]]);
        expect(result).toEqual({ opponent: [], hero: [[3, 2]] });
    });
    it('hero trading 3,4 into 3,4 should equal 3,1 for the hero and opponent', () => {
        let result = tradeMinions([[3, 4]], [[3, 4]]);
        expect(result).toEqual({ opponent: [[3, 1]], hero: [[3, 1]] });
    });
    it('hero trading 3,4 into 3,5 should equal 3,1 for the hero and 3, 2 for the opponent', () => {
        let result = tradeMinions([[3, 4]], [[3, 4]]);
        expect(result).toEqual({ opponent: [[3, 1]], hero: [[3, 1]] });
    });
    it('hero trading 3,3 into 5,5 should equal 5,2 for the for the opponent', () => {
        let result = tradeMinions([[5, 5]], [[3, 3]]);
        expect(result).toEqual({ opponent: [[5, 2]], hero: [] });
    });
    it('hero trading 5,5 into 4,4 should equal 5,1 for the for the hero', () => {
        let result = tradeMinions([[4, 4]], [[5, 5]]);
        expect(result).toEqual({ opponent: [], hero: [[5, 1]] });
    });
    it('hero trading 0,4 into 4,4 should equal 4,4 for the for the opponent', () => {
        let result = tradeMinions([[4, 4]], [[0, 4]]);
        expect(result).toEqual({ opponent: [[4, 4]], hero: [] });
    });
    it('hero trading 2,2 into 0,4 should equal 2,2 for the for the hero and 0,2 for the opponent', () => {
        let result = tradeMinions([[0, 4]], [[2, 2]]);
        expect(result).toEqual({ opponent: [[0, 2]], hero: [[2, 2]] });
    });
    it('hero trading 2,2 into 0,4 should equal 2,2 for the for the hero and 0,2 for the opponent', () => {
        let result = tradeMinions([[0, 4]], [[2, 2]]);
        expect(result).toEqual({ opponent: [[0, 2]], hero: [[2, 2]] });
    });
    it('hero trading 0,2 into 0,5 should equal 0,2 for the for the hero and 0,5 for the opponent', () => {
        let result = tradeMinions([[0, 2]], [[0, 5]]);
        expect(result).toEqual({ opponent: [[0, 2]], hero: [[0, 5]] });
    });
});

describe('trading variations with multiple minions', () => {
    it('hero trading 1,1/1,1 into 1,1/1,1 should equal an empty board', () => {
        let result = tradeMinions([[1, 1], [1, 1]], [[1, 1], [1, 1]]);
        expect(result).toEqual({ opponent: [], hero: [] });
    });
    it('hero trading 2,1/2,2 into 1,1/1,2 should equal 2/1 for the hero', () => {
        let result = tradeMinions([[1, 1], [1, 2]], [[2, 1], [2, 2]]);
        expect(result).toEqual({ opponent: [], hero: [[2, 1]] });
    });
    it('hero trading 2,3/2,3 into 2,2/1,2 should equal 2,1/2,2 for the hero', () => {
        let result = tradeMinions([[2, 2], [1, 2]], [[2, 3], [2, 3]]);
        expect(result).toEqual({ opponent: [], hero: [[2, 1], [2, 2]] });
    });
    it('hero trading 2,3/2,3 into 2,3/3,2 should equal 2,1 for both players', () => {
        let result = tradeMinions([[2, 3], [3, 2]], [[2, 3], [2, 3]]);
        expect(result).toEqual({ opponent: [[2, 1]], hero: [[2, 1]] });
    });
    it('hero trading 0,3/1,3 into 0,2/1,2 should equal 0,3/1,2 for the hero and 0,2/1,1 for the opponent', () => {
        let result = tradeMinions([[0, 2], [1, 2]], [[0, 3], [1, 3]]);
        expect(result).toEqual({
            opponent: [[0, 2], [1, 1]],
            hero: [[0, 3], [1, 2]],
        });
    });
    it('hero trading 2,3/1/5 into 2,2/1,2/3,4 should equal 2,1/1,4 for the hero and 1,1/3,4 for the opponent', () => {
        let result = tradeMinions([[2, 2], [1, 2], [3, 4]], [[2, 3], [1, 5]]);
        expect(result).toEqual({
            opponent: [[1, 1], [3, 4]],
            hero: [[2, 1], [1, 4]],
        });
    });
    it('hero trading 4,1/4,2/6,4/0,4 into 3,5/3,5/2,4  should equal 4,1/4,2/6,4/0,4 for the hero and 3,1/3,1 for the opponent', () => {
        let result = tradeMinions(
            [[3, 5], [3, 5], [2, 4]],
            [[4, 4], [4, 5], [6, 6], [0, 4]]
        );
        expect(result).toEqual({
            opponent: [[3, 1], [3, 1]],
            hero: [[4, 1], [4, 2], [6, 4], [0, 4]],
        });
    });
    it('hero trading 2,2/5,3/4,6/3,4 into 5,7 shoud equal 5,3/4,6/3,4 for the hero and 5,5 for the opponent', () => {
        let result = tradeMinions([[5, 7]], [[2, 2], [5, 3], [4, 6], [3, 4]]);
        expect(result).toEqual({
            opponent: [[5, 5]],
            hero: [[5, 3], [4, 6], [3, 4]],
        });
    });
    it('hero trading 0,2/3,6/4,4/3,2 into 4,4/0,8/8,3 shoud equal 3,6/3,2 for the hero and 4,4/0,5 for the opponent', () => {
        let result = tradeMinions(
            [[4, 4], [0, 8], [8, 3]],
            [[0, 2], [3, 6], [4, 4], [3, 2]]
        );
        expect(result).toEqual({
            opponent: [[4, 4], [0, 5]],
            hero: [[3, 6], [3, 2]],
        });
    });
});

describe('some edge cases', () => {
    it('any minions with zero health can still trade but will die after that', () => {
        let result = tradeMinions([[3, 0]], [[3, 3]]);
        expect(result).toEqual({ opponent: [], hero: [] });
    });
    it('0/0 minions still accepted but should die after trades', () => {
        let result = tradeMinions([[0, 0]], [[1, 0]]);
        expect(result).toEqual({ opponent: [], hero: [] });
    });
    it('null counts as zero for health and therefore minion will be destroyed', () => {
        let result = tradeMinions([[2, null]], [[1, 3]]);
        expect(result).toEqual({ opponent: [], hero: [[1, 1]] });
    });
    it('null still counts as zero in attack but will be output as so', () => {
        let result = tradeMinions([[2, 4]], [[null, 3]]);
        expect(result).toEqual({ opponent: [[2, 4]], hero: [[null, 1]] });
    });
    it('undefined will output NaN into the output', () => {
        let result = tradeMinions([[2, undefined]], [[1, 3]]);
        expect(result).toEqual({ opponent: [[2, NaN]], hero: [[1, 1]] });
    });
});
