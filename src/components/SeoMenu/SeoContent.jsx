import React from 'react';

const SeoContent = ({links, config, benefits}) => {
    let filterCount = 0;
    let cols = null;
    let benefitRows = null;

    if (!benefits) {
        cols = config.map(i => {
            let col = <div className="seoContent__box_col">
                {links.filter( (item, index) => (index >= filterCount && index < (filterCount + i)) )
                        .map(item => <a class="seoContent__box_link" href={item.link}>{item.linkName}</a>)}
            </div>
            filterCount += i;
            return col;
        })
    }

    if (benefits) {
        benefitRows = benefits.map(row => {
            return (
                <>
                    <div className="seoContent__box_benefit_title">{row.title}</div>
                    {row.rows.map(line => <p className="seoContent__box_benefit_description">{line}</p>)}
                </>

            )
        })
    }
    
    return (
        <div className="seoContent__box">
            {cols && cols || benefitRows}
        </div>
    )
}

export default SeoContent;