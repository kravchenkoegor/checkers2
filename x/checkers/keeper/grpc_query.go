package keeper

import (
	"github.com/kravchenkoegor/checkers/x/checkers/types"
)

var _ types.QueryServer = Keeper{}
