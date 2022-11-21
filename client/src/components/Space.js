function Space({ size = 30, bottom = true, top, start, end, className, children }) {
    let style = {
        marginBottom: bottom ? size : 0,
        marginTop: top ? size : 0,
        marginLeft: start ? size : 0,
        marginRight: end ? size : 0
    };

    return (
        <div style={style} className={className}>{children}</div>
    );
}

export default Space;
