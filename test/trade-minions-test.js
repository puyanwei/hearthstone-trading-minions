describe('#tradeMinions', () => {
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
