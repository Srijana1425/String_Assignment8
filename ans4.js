class Node
{
    constructor(data)
    {
        this.data=data;
        this.left = this.right = null;
    }
}
let start = 0;
function constructTree(s)
{
    if (s.length == 0 || s == null)
    {
        return null;
    }
      
    if (start >= s.length)
        return null;
    let neg = false;
    if (s[start] == '-')
    {
        neg = true;
        start++;
    }
    let num = 0;
    while (start < s.length && !isNaN(s[start] -
    parseInt(s[start])))
    {
        let digit = parseInt(
            s[start]);
        num = num * 10 + digit;
        start++;
    }
    if (neg)
        num = -num;
    let node = new Node(num);
      
    if (start >= s.length)
    {
        return node;
    }
    if (start < s.length && s[start] == '(' )
    {
        start++;
        node.left = constructTree(s);
    }
      
    if (start < s.length && s[start] == ')')
    {
        start++;
        return node;
    }

    if (start < s.length && s[start] == '(')
    {
        start++;
        node.right = constructTree(s);
    }
      
    if (start < s.length && s[start] == ')')
    {
        start++;
        return node;
    }
    return node;
}
function printTree(node)
{
    if (node == null)
        return;
    
    console.log(node.data + " ");
    printTree(node.left);
    printTree(node.right);
}

// Input
let s = "4(2(3)(1))(6(5))";
let root = constructTree(s);
printTree(root);