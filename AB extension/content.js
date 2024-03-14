function walk(node) {
    var child, next;
    switch (node.nodeType) {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) {
    if (textNode.parentElement.tagName.toLowerCase() !== "script" &&
        textNode.parentElement.tagName.toLowerCase() !== "style" &&
        textNode.parentElement.tagName.toLowerCase() !== "textarea") {
        var text = textNode.nodeValue;
        textNode.nodeValue = text.replace(/a/g, 'b');
    }
}

walk(document.body);
