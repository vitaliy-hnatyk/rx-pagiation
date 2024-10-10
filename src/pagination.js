import React from "react";

import { useTranslation, initReactI18next } from "react-i18next";
import i18next from './i18n';


const Pagination = ({ page, linkMore, productMaxpage, limit, onclick, parentI18n }) => {

    const i18n =  parentI18n ? parentI18n : i18next; 
    const { t } = useTranslation();

    let startPage = page - 3;
    startPage = startPage < 1 ? 1 : startPage;
    let endPage = page + 3;
    endPage = endPage > productMaxpage ? productMaxpage : endPage;

    return <I18nextProvider i18n={i18n}><div className="theme-paggination-block">
        <div className="row">
            <div className="col-xl-6 col-md-6 col-sm-12">
                <nav aria-label={t('page_navigation')}>
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href={linkMore} onClick={onclick(0)} 
                        data-page="0" aria-label={t('previous')}>
                            <span aria-hidden="true"><img src="/static/img/arrow-left.svg" width="20" height="20" /></span></a></li>
                        {
                            Array(endPage - startPage + 1)
                                .fill(0)
                                .map((_, i) => {

                                    const p = startPage + i;
                                    if (p == 1) {
                                        return <li className={"page-item " + ((page == p) ? "active" : "")}><a className="page-link"
                                            href={linkMore}  onClick={onclick(p)} data-page={p} >{p}</a></li>;

                                    } else
                                        return <li className={"page-item " + ((page == p) ? "active" : "")}>
                                            <a className="page-link" href={linkMore + "page-" + p + "/"}  onClick={onclick(p)} data-page={p}>{p}</a></li>;
                                }
                                )
                        }
                        <li className="page-item"><a className="page-link" href={linkMore + "page-" + productMaxpage + "/"}
                            aria-label={t('next')}  onClick={onclick(productMaxpage)} data-page={productMaxpage}><span aria-hidden="true">
                                <img src="/static/img/arrow-prev.svg" width="20" height="20" /></span></a></li>
                    </ul>
                </nav>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="product-search-count-bottom">
                    <h5>Показано продукти {limit} із {productMaxpage} результатів</h5>
                </div>
            </div>
        </div>
    </div></I18nextProvider>;
}


export { Pagination as default };
