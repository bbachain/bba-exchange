import Head from 'next/head'
function CustomHead({ PRICE, SYMBOL }) {
    return (
        <>
            <Head>
                <title>{PRICE} | {SYMBOL} | CHARTSA</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    )
}

export default CustomHead