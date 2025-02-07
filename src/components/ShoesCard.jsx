const ShoesCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
    const handleclick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe)
        }
    }
    return (
        <div className={`border-2 rounded-xl
    ${bigShoeImg === imgURL.bigShoe
                ? 'border-coral-red'
                : 'border-transparent'}
                cursor-pointer max-sm:flex-1`}
            onClick={handleclick}>

            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <img src={imgURL.thumbnail}
                alt="shoes collection"
                height={103}
                width={127}
                className="object-contain" />
            </div>

        </div>
    )
}

export default ShoesCard
