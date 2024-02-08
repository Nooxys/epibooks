import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'
import MyAlert from '../components/MyAlert'
import CommentArea from '../components/CommentArea'
import horrorbooks from '../data/horror.json'
describe('General mounting', () => {
  it('renders MyALert', () => {
    render(<MyAlert />)
  })

  it('renderes CommentArea component', () => {
    render(<CommentArea />)
  })
})

describe('JSON mounting', () => {
  it('shows cards equal than json books', () => {
    render(<App />)
    const cards = screen.getAllByTestId('card-data')
    const jsonhorrorbooks = horrorbooks
    expect(cards).toHaveLength(jsonhorrorbooks.length)
    // expect(jsonhorrorbooks).not.toHaveLength(0)
  })
})

describe('checking functionalities', () => {
  it('filters books using Search function', () => {
    render(<App />)
    const textArea = screen.getByPlaceholderText('I wish to see..')
    fireEvent.change(textArea, { target: { value: 'Celtic' } })
    const cards = screen.getAllByTestId('card-data')

    expect(cards).toHaveLength(1)
  })

  it('filters books using another Search function ', () => {
    render(<App />)
    const textArea = screen.getByPlaceholderText('I wish to see..')
    fireEvent.change(textArea, { target: { value: 'DKsnmds' } })
    const cards = screen.queryAllByTestId('card-data')

    expect(cards).toHaveLength(0)
  })
  it('filters books using another of another Search function', () => {
    render(<App />)
    const textArea = screen.getByPlaceholderText('I wish to see..')
    fireEvent.change(textArea, { target: { value: 'End' } })
    const cards = screen.getAllByTestId('card-data')

    expect(cards).toHaveLength(2)
  })
  it('change borders onclick', () => {
    render(<App />)
    const cards = screen.getAllByTestId('card-data')
    fireEvent.click(cards[3])
    expect(cards[3]).toHaveClass('border')
  })

  it('shows empty commentArea on page render', () => {
    render(<App />)
    const commentlist = screen.queryByTestId('comment-data')
    expect(commentlist).not.toBeInTheDocument()
  })
  it('shows commentArea on book click', async () => {
    render(<App />)
    const cards = screen.getAllByTestId('card-data')
    fireEvent.click(cards[3])
    const commentlist = await screen.findAllByTestId('comment-data')
    expect(commentlist[0]).toBeInTheDocument()
  })
})
