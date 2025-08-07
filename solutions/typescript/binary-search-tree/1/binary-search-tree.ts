  type nodo={left:nodo|null,data:number,right:nodo|null};
export class BinarySearchTree {
  albero:nodo[];
currentNode:nodo|null;
radice:nodo;
  constructor(data: number) {
    this.radice={left:null,data:data,right:null}
    this.currentNode=this.radice;
    this.albero=[];
    this.albero.push(this.radice);
  }

  public get data(): number|undefined {
    const p=this.currentNode?.data;
    this.currentNode=this.radice
    return p
  }

  public get right(): nodo | null {
    return this.radice.right;
  }

  public get left(): nodo | null {
     return this.radice.left;
  }

  public insert(item: number): void {
    let rif = this.radice;
    while (true) {
      if (item <= rif.data) {
        if (rif.left === null) {
          rif.left = { left: null, data: item, right: null };
          this.albero.push(rif.left);
          break;
        } else {
          rif = rif.left;
        }
      } else if (item > rif.data) {
        if (rif.right === null) {
          rif.right = { left: null, data: item, right: null };
          this.albero.push(rif.right);
          break;
        } else {
          rif = rif.right;
        }
      } else {
        // item è uguale a rif.data: non inseriamo duplicati
        break;
      }
    }
}

public each(callback: (data: number) => void): void {
  const visit = (node: nodo | null) => {
    if (node === null) return;
    visit(node.left);
    callback(node.data);
    visit(node.right);
  };
  visit(this.radice);
}
}
