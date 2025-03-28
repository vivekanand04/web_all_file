class SmallestInfiniteSet
{
public:
    deque<int> dq;
    deque<int>::iterator itr;

    SmallestInfiniteSet()
    {
        dq = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11};
    }

    int popSmallest()
    {
        int numm = *(dq.begin());
        cout << numm;
        dq.pop_front();
        dq.push_back(dq.back() + 1);
        return numm;
    }

    void addBack(int num)
    {
        //  itr=dq.begin();
        for (itr = dq.begin(); itr != dq.end(); itr++)
        {
            if (num == *itr)
                break; // no need to push

            if (num < *itr)
            {
                dq.insert(itr, num);
                break;
            }
        }
    }
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * SmallestInfiniteSet* obj = new SmallestInfiniteSet();
 * int param_1 = obj->popSmallest();
 * obj->addBack(num);
 */