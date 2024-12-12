(function (blocks, element) {
    var el = element.createElement;

    blocks.registerBlockType('custom/instructions-block', {
        title: 'Instructions Block',
        icon: 'admin-comments',
        category: 'common',
        edit: function (props) {
            return el(
                'div',
                { className: 'instructions-block' },
                el('h3', {}, 'Reminders from James'),
                el('p', {}, 'Note: This reminder will not show on the frontend'),
                el('textarea', {
                    value: props.attributes.content,
                    onChange: function (event) {
                        props.setAttributes({ content: event.target.value });
                    },
                    placeholder: 'Enter your instructions here...'
                })
            );
        },
        save: function (props) {
            return el('div', { style: { display: 'none' } }, props.attributes.content);
        },
        attributes: {
            content: {
                type: 'string',
            },
        },
    });
})(
    window.wp.blocks,
    window.wp.element
); 