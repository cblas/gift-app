import {render} from '@testing-library/react';
import {GridItem} from '../../src/components/GridItem';

describe('GridItem component testing ', () => {
    const title = 'my test';
    const url= 'https://i.blogs.es/82d7ef/pokemon/1366_2000.jpeg';

    test('shoul be do match with snapshot', () => {
        const {container} = render(<GridItem title={title} url ={url}/>)
        expect(container).toMatchSnapshot();
    })
});