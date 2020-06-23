// Chapter 5: React component lifecycle events

/*
are certain situations in which you need more
granular control over a component


To implement lifecycle events, you define them on a class as methods (see sec-
tion 3.2.5)—this is a convention that React expects you to follow
*/

// Reference ch04/clock/jsx/clock.jsx

class Clock extends React.Component {

    /**
     * If no componentDidMount() method is defined, React 
     * won’t execute any code for this event.
     */
    componentDidMount() {
        /* it is invoked when a component is inserted into the DOM

        This method is a recomended place to put code to integrate with
        other front-end framweworks and libraries as weill as to send
        XHR request to a ser ver [Ref. page 95]
        */
    }

}
