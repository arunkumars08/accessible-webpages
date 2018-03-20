/**
 * Write a code in HTML, CSS, JS to form two list selection. And the user can perform several operations on these like:

                  >> & <<(Move all from List1 A to List B ).

                  > & < (Move only selected items)

Up, Down to select the item

Also an Text Area and Add button below List A, to add rows to the list.
 */

class Operations {

    constructor(source, target) {
        this.source = source;
        this.target = target;
    }

    moveAll() {
        while (this.source.length) {
            this.target.push(this.source.pop());
        }
    }

    moveSelected(selectedIndex) {
        this.target.push(this.source.splice(selectedIndex, 1)[0]);
    }

}

const driver = () => {
    var source = [1, 2, 3, 4, 5];
    var target = [];

    var op = new Operations(source, target);

    op.moveSelected(3);
    console.log(op.source, op.target);

    op.moveAll();
    console.log(op.source, op.target);
}

driver();
