<!-- ______ Header
            ______________________________________________ -->

# My First Markdown Document

This is some example text.

<!-- ______ Links
            ______________________________________________ -->

## Links Example

My [portfolio][portfolio] site can be found by clicking the word portfolio.

<!-- ______ Images
            ______________________________________________ -->

## Images Example

![This is a random image example][photo_1]

### How to link to a larger version of a photo

[![This links to a larger photo](https://unsplash.it/50/50?image=100)](https://unsplash.it/500/500?image=100 'this links to the larger version')

<!-- ______ Lists
            ______________________________________________ -->

-   This
-   is
-   an
-   unordered
-   list

---

-   This
    -   is
        -   a
            -   nested
            -   unordered
    -   list

---

1. This
2. is
3. a
4. ordered
5. list

---

1. This
    1. is
    2. a
    3. nested
2. nested

    1. ordered

        1. list
        2. combine

            - unordered

                paragraph text inside the list at that level

<!-- ______ Code blocks
            ______________________________________________ -->

```python
x = 'variable'
```

```js
let x = 'variable';
```

Inline code `x = 'code'`!

### Show the difference

Unfortunately it isn't working in VS Code, should highlight the old one with red and the new with green.

```diff
def function(arg):
    - old = 'old'
    + new = 'new'
```

<!-- ______ Line breaks, horizontal rules, and block quotes
            ______________________________________________ -->

## Line breaks

This is won't
break!

This<br>
will

Also

This, but maybe by too much

## Horizontal rule

You want an underline separating

---

your text use three dashes

## Block quote

> This is a quote -
> Some Person
>
> New quote
>
> > **Another Person**

> With separation - The First Person

Added context

> Newest quote - Same Other Person

<!-- ______ Tables
            ______________________________________________ -->

## Tables

| Column 1 | Column 2 |
| :------- | :------- |
| Row 1    | Value 1  |
| Row 2    | Value 2  |

| Centered | Right Align |
| :------: | ----------: |
|  Row 1   |     Value 1 |
|  Row 2   |     Value 2 |

<!-- ______ Extras
            ______________________________________________ -->

-   [ ] Something to do
-   [x] Another thing
-   [ ] And a third

<!-- ______ Link Variables
            ______________________________________________ -->

[portfolio]: https://postulate.tech 'My portfolio website'
[photo_1]: https://unsplash.it/500/500?random 'this is the tooltip text'
