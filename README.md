from https://locomotivemtl.github.io/locomotive-scroll/

data-scroll -> acts as a trigger, add it as a class to html elements, when the element is intersecting by the observer, a class is-inview
is added \
then play with it thanks CSS or JS, for exemple:

    .appear.is-inview {
        transition-delay: 1s;
        opacity: 1;
        transform: none;
    }
dont forget to wrap the element with a container as a observer with:

    <body data-scroll-container>
        html
    <body>

parallax:\
the data-scroll-spped="X" gonna make a difference in its behavor:

    <div data-scroll class="appear" id="h1-wrapper">
        <h1 data-scroll data-scroll-speed="6">Jean Scratch</h1>
    </div>

the  data-scroll-direction="horizontal" allow to make the movement in a horizontal way:

    <h2 data-scroll data-scroll-speed="-4" data-scroll-direction="horizontal">Développeur</h2>

the data-scroll-position="left" allow to fill the gap between them, and to set it align + where its from the element

    <div data-scroll class="appear" id="h2-2">
        <h2
        data-scroll 
        data-scroll-speed="-6" 
        data-scroll-direction="horizontal"
        data-scroll-position="left"
        >Front-end</h2>
    </div>

CSS:

La propriété mix-blend-mode définit la façon dont le contenu d'un élément doit se mélanger avec le contenu de l'élément parent et avec son arrière-plan.

    mix-blend-mode: exclusion;

Select

    *::selection {
        background: #000101;
        color: #fefeff;
    }